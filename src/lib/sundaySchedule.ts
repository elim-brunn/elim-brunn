export type SundayKind = 'first' | 'third' | 'regular'

export interface SundaySlotLabels {
  morning: string
  evening: string
}

export interface SundayDaySchedule {
  kind: SundayKind
  date: Date
  morning: { time: string; label: string }
  evening: { time: string; label: string }
}

export type SpecialSundaySchedule = SundayDaySchedule & { kind: 'first' | 'third' }

export interface SundayScheduleLabels {
  regular: SundaySlotLabels
  first: SundaySlotLabels
  third: SundaySlotLabels
}

const MORNING_TIME = '9:00'
const EVENING_TIME = '17:00'

/** n-th Sunday of month (1 = first Sunday), month 0-indexed */
export function getNthSundayOfMonth(year: number, month: number, n: number): Date | null {
  let count = 0
  const cursor = new Date(year, month, 1)

  while (cursor.getMonth() === month) {
    if (cursor.getDay() === 0) {
      count += 1
      if (count === n) {
        return new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate())
      }
    }
    cursor.setDate(cursor.getDate() + 1)
  }

  return null
}

export function getSundayKind(date: Date): SundayKind {
  const year = date.getFullYear()
  const month = date.getMonth()
  const first = getNthSundayOfMonth(year, month, 1)
  const third = getNthSundayOfMonth(year, month, 3)

  if (first && isSameCalendarDay(date, first)) return 'first'
  if (third && isSameCalendarDay(date, third)) return 'third'
  return 'regular'
}

function isSameCalendarDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function getSundaySchedule(date: Date, labels: SundayScheduleLabels): SundayDaySchedule {
  const kind = getSundayKind(date)
  const slotLabels = labels[kind]

  return {
    kind,
    date,
    morning: { time: MORNING_TIME, label: slotLabels.morning },
    evening: { time: EVENING_TIME, label: slotLabels.evening },
  }
}

export function getSpecialSundaysInMonth(
  year: number,
  month: number,
  labels: SundayScheduleLabels,
): SpecialSundaySchedule[] {
  const result: SpecialSundaySchedule[] = []

  const first = getNthSundayOfMonth(year, month, 1)
  const third = getNthSundayOfMonth(year, month, 3)

  if (first) result.push({ ...getSundaySchedule(first, labels), kind: 'first' })
  if (third) result.push({ ...getSundaySchedule(third, labels), kind: 'third' })

  return result.sort((a, b) => a.date.getTime() - b.date.getTime())
}

/** Next upcoming Sunday (today if Sunday) */
export function getNextSunday(from = new Date()): Date {
  const d = new Date(from.getFullYear(), from.getMonth(), from.getDate())
  const day = d.getDay()
  const daysUntil = day === 0 ? 0 : 7 - day
  d.setDate(d.getDate() + daysUntil)
  return d
}

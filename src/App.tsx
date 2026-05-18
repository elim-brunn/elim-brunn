import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { AboutPage } from './pages/AboutPage'
import { AnnouncementsPage } from './pages/AnnouncementsPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { LivePage } from './pages/LivePage'
import { SermonsPage } from './pages/SermonsPage'
import { ServicesPage } from './pages/ServicesPage'
import { ROUTES } from './routes/paths'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-parchment font-body text-ink antialiased">
          <Routes>
            <Route element={<MainLayout />}>
              <Route path={ROUTES.home} element={<HomePage />} />
              <Route path="/glauben" element={<Navigate to="/#glauben" replace />} />
              <Route path={ROUTES.services} element={<ServicesPage />} />
              <Route path={ROUTES.announcements} element={<AnnouncementsPage />} />
              <Route path={ROUTES.live} element={<LivePage />} />
              <Route path={ROUTES.sermons} element={<SermonsPage />} />
              <Route path={ROUTES.about} element={<AboutPage />} />
              <Route path={ROUTES.contact} element={<ContactPage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App

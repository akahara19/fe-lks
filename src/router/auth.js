export default function auth({ next, router }) {
    if (!localStorage.getItem('token')) { // Jika tidak ada token login, redirect ke halaman login
      return router.push({ name: 'login' })
    }
    
    return next()
  }
  
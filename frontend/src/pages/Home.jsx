import React, { useState } from 'react'
import Footer from '../components/generalComponents/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import HeroSection from '../components/homeComponents/HeroSection'
import CategorySection from '../components/homeComponents/CategorySection'

const Home = () => {

  const location = useLocation();
  const navigation = useNavigate()
  const [categoryButtons, setCategoryButtons] = useState([
    { 
      id: 1,
      name: 'Tech',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.144.206.38.996.591 1.921h-.792v2h8.032v-2h-.79c.213-.927.45-1.719.593-1.925.352-.503.726-.94 1.087-1.363z"></path></svg>,
      largeIcon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.144.206.38.996.591 1.921h-.792v2h8.032v-2h-.79c.213-.927.45-1.719.593-1.925.352-.503.726-.94 1.087-1.363z"></path></svg>,
      link:'Notifications'
    },
    { 
      id: 2,
      name: 'Clothes',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'currentColor'}}><path d="M21.316 4.055C19.556 3.478 15 1.985 15 2a3 3 0 1 1-6 0c0-.015-4.556 1.478-6.317 2.055A.992.992 0 0 0 2 5.003v3.716a1 1 0 0 0 1.242.97L6 9v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9l2.758.689A1 1 0 0 0 22 8.719V5.003a.992.992 0 0 0-.684-.948z"></path></svg>,
      largeIcon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style={{fill: 'currentColor'}}><path d="M21.316 4.055C19.556 3.478 15 1.985 15 2a3 3 0 1 1-6 0c0-.015-4.556 1.478-6.317 2.055A.992.992 0 0 0 2 5.003v3.716a1 1 0 0 0 1.242.97L6 9v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9l2.758.689A1 1 0 0 0 22 8.719V5.003a.992.992 0 0 0-.684-.948z"></path></svg>,
      link:''
    },
    { 
      id: 3,
      name: 'Furniture',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentColor'}}><path d="M19 13V4c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v9a1 1 0 0 0-1 1v8h2v-5h12v5h2v-8a1 1 0 0 0-1-1zm-2-9v9h-2V4h2zm-4 0v9h-2V4h2zM7 4h2v9H7V4z"></path></svg>,
      largeIcon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style={{fill:'currentColor'}}><path d="M19 13V4c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v9a1 1 0 0 0-1 1v8h2v-5h12v5h2v-8a1 1 0 0 0-1-1zm-2-9v9h-2V4h2zm-4 0v9h-2V4h2zM7 4h2v9H7V4z"></path></svg>,
      link: ''
    },
    { 
      id: 4,
      name: 'Make up',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M7.061 22c1.523 0 2.84-.543 3.91-1.613 1.123-1.123 1.707-2.854 1.551-4.494l8.564-8.564a3.123 3.123 0 0 0-.002-4.414c-1.178-1.18-3.234-1.18-4.412 0l-8.884 8.884c-1.913.169-3.807 1.521-3.807 3.919 0 .303.021.588.042.86.08 1.031.109 1.418-1.471 2.208a1.001 1.001 0 0 0-.122 1.717C2.52 20.563 4.623 22 7.061 22c-.001 0-.001 0 0 0zM18.086 4.328a1.144 1.144 0 0 1 1.586.002 1.12 1.12 0 0 1 0 1.584L12 13.586 10.414 12l7.672-7.672zM6.018 16.423c-.018-.224-.037-.458-.037-.706 0-1.545 1.445-1.953 2.21-1.953.356 0 .699.073.964.206.945.475 1.26 1.293 1.357 1.896.177 1.09-.217 2.368-.956 3.107C8.865 19.664 8.049 20 7.061 20H7.06c-.75 0-1.479-.196-2.074-.427 1.082-.973 1.121-1.989 1.032-3.15z"></path></svg>,
      largeIcon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M7.061 22c1.523 0 2.84-.543 3.91-1.613 1.123-1.123 1.707-2.854 1.551-4.494l8.564-8.564a3.123 3.123 0 0 0-.002-4.414c-1.178-1.18-3.234-1.18-4.412 0l-8.884 8.884c-1.913.169-3.807 1.521-3.807 3.919 0 .303.021.588.042.86.08 1.031.109 1.418-1.471 2.208a1.001 1.001 0 0 0-.122 1.717C2.52 20.563 4.623 22 7.061 22c-.001 0-.001 0 0 0zM18.086 4.328a1.144 1.144 0 0 1 1.586.002 1.12 1.12 0 0 1 0 1.584L12 13.586 10.414 12l7.672-7.672zM6.018 16.423c-.018-.224-.037-.458-.037-.706 0-1.545 1.445-1.953 2.21-1.953.356 0 .699.073.964.206.945.475 1.26 1.293 1.357 1.896.177 1.09-.217 2.368-.956 3.107C8.865 19.664 8.049 20 7.061 20H7.06c-.75 0-1.479-.196-2.074-.427 1.082-.973 1.121-1.989 1.032-3.15z"></path></svg>,
      link: ''
    },
    { 
      id: 5,
      name: 'Laptop',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M20 17.722c.595-.347 1-.985 1-1.722V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v11c0 .736.405 1.375 1 1.722V18H2v2h20v-2h-2v-.278zM5 16V5h14l.002 11H5z"></path></svg>,
      largeIcon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M20 17.722c.595-.347 1-.985 1-1.722V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v11c0 .736.405 1.375 1 1.722V18H2v2h20v-2h-2v-.278zM5 16V5h14l.002 11H5z"></path></svg>,
      link: ''
    },
    { 
      id: 6,
      name: 'Headphones',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M20 12v-1.707c0-4.442-3.479-8.161-7.755-8.29-2.204-.051-4.251.736-5.816 2.256A7.933 7.933 0 0 0 4 10v2c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2V10a5.95 5.95 0 0 1 1.821-4.306 5.977 5.977 0 0 1 4.363-1.691C15.392 4.099 18 6.921 18 10.293V20h2c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2z"></path><path d="M7 12h2v8H7zm8 0h2v8h-2z"></path></svg>,
      largeIcon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M20 12v-1.707c0-4.442-3.479-8.161-7.755-8.29-2.204-.051-4.251.736-5.816 2.256A7.933 7.933 0 0 0 4 10v2c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2V10a5.95 5.95 0 0 1 1.821-4.306 5.977 5.977 0 0 1 4.363-1.691C15.392 4.099 18 6.921 18 10.293V20h2c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2z"></path><path d="M7 12h2v8H7zm8 0h2v8h-2z"></path></svg>,
      link: ''
    }
  ])

  const handleNavigate = (url) => {
    navigation(`/${url}`)
  }

  return (
    <div className='flex flex-col items-start justify-start w-full h-full min-h-screen mb-20'>

      <HeroSection
        handleNavigate={handleNavigate}
      />

      <CategorySection
        categoryButtons={categoryButtons}
        handleNavigate={handleNavigate}
      />

      {/* <Footer/> */}

    </div>
  )
}

export default Home
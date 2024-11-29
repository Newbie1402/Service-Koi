import { Link } from 'react-router-dom'
import LoginForm from '../components/form/LoginForm'
import Logo from '../components/Logo'

const LoginPage = () => {
    return (
        <div className="grid grid-cols-[950px_1fr]">
            <div className="relative">
                <Link to={'/'} className="absolute top-8 left-0 block w-fit h-fit">
                    <Logo width={200} height={82} />
                </Link>
                <div className="h-screen grid place-items-center">
                    <div className="w-[80%]">
                        <h1 className="text-3xl font-semibold text-center mb-10">Login</h1>
                        <LoginForm />
                    </div>
                </div>
            </div>
            <div className="w-full h-screen">
                <img src={'https://img.freepik.com/premium-photo/koi-fish-wallpaper-swimming-pond-full-lotuses_1013366-10536.jpg'} alt="banner" className="w-full h-full" />
            </div>
        </div>
    )
}

export default LoginPage

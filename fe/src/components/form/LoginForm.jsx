import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { config } from '../../configs'
import { useCustomerLogin } from '../../hooks/useCustomerLogin'
import { useStaffLogin } from '../../hooks/useStaffLogin'
import { Checkbox } from '@nextui-org/checkbox'
import { useState } from 'react'

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    password: Yup.string().required('Required'),
})

function LoginForm() {
    const [isStaff, setIsStaff] = useState(false)
    const { customerLogin } = useCustomerLogin()
    const { staffLogin } = useStaffLogin()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            const authInfo = {
                email: values.email,
                password: values.password,
            }
            /**
             * Customer có thể là Admin hoặc người mua hàng
             * Staff là bác sĩ
             */
            if (isStaff) {
                staffLogin(authInfo)
                console.log('Staff login')
            } else {
                customerLogin(authInfo)
                console.log('Customer login')
            }
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-5">
            <Input
                isRequired
                label="Email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                errorMessage={formik.errors.email}
                isInvalid={formik.errors.email ? true : false}
            />
            <Input
                isRequired
                label="Password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                errorMessage={formik.errors.password}
                isInvalid={formik.errors.password ? true : false}
            />
            <div className="flex items-center justify-between">
                <p className="text-gray-800 text-sm">
                    Does your have an account?{' '}
                    <Link to={config.routes.register} className="underline text-blue-600 underline-offset-2">
                        Register
                    </Link>
                </p>

                <Checkbox isSelected={isStaff} onValueChange={setIsStaff} className="text-sm">
                    I am a Staff
                </Checkbox>
            </div>
            <Button type="submit" color="primary" className="font-semibold">
                Login
            </Button>
        </form>
    )
}

export default LoginForm

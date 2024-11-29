import { Avatar, Button, useDisclosure } from '@nextui-org/react'
import { useAuthContext } from '../contexts/AuthContext'
import { useCustomerLogout } from '../hooks/useCustomerLogout'
import CustomerChangePasswordModal from '../components/modals/CustomerChangePasswordModal'

function UserInformation() {
    const { authUser } = useAuthContext()
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const { customerLogout } = useCustomerLogout()

    return (
        <div className="my-5">
            <h1 className="text-2xl font-bold text-center py-5">Customer Information</h1>
            <div className="mx-auto max-w-[800px] py-5 px-7 bg-gradient-to-tr from-primary-300 via-primary-400 to-primary-500 hover:bg-gradient-to-tl rounded-lg transition duration-200 text-white">
                <div className="flex flex-col gap-5 items-center text-lg">
                    <Avatar style={{ width: '100px', height: '100px' }} isBordered src={`https://ui-avatars.com/api/?name=${authUser.name ?? authUser.firstname}`} />
                    <div className="mt-3 text-center space-y-3">
                        <p>
                            Full Name: <span className="font-semibold">{authUser.name ?? authUser.firstname}</span>
                        </p>
                        <p>
                            Email: <span className="font-semibold">{authUser.email}</span>
                        </p>
                        <p>
                            Phone: <span className="font-semibold">{authUser.phone}</span>
                        </p>
                        <p>
                            Address: <span className="font-semibold">{authUser.address}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-7 flex items-center justify-center gap-10">
                <CustomerChangePasswordModal isOpen={isOpen} onOpenChange={onOpenChange} />
                <Button color="warning" className="text-white" onPress={onOpen}>
                    Change Password
                </Button>
                <Button
                    color="secondary"
                    onClick={() => {
                        customerLogout()
                    }}
                >
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default UserInformation

import { Avatar, Button, useDisclosure } from '@nextui-org/react'
import { useAuthContext } from '../contexts/AuthContext'
import StaffChangePasswordModal from '../components/modals/StaffChangePasswordModal'
import { useStaffLogout } from '../hooks/useStaffLogout'

function Staff() {
    const { authUser } = useAuthContext()
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const { staffLogout } = useStaffLogout()
    return (
        <div className="p-5">
            <h1 className="text-2xl font-semibold">Staff Home</h1>
            <div className="border-t mt-5 p-5">
                <p className="text-xl font-medium">Doctor Information</p>
                <div className="mt-10">
                    <Avatar style={{ width: '200px', height: '200px' }} isBordered src={`https://ui-avatars.com/api/?name=${authUser.name}`} />
                    <div className="mt-5 ml-5 text-lg">
                        <div className="grid grid-cols-[200px_1fr] gap-3 mb-2">
                            <p>Full Name:</p>
                            <p className="font-semibold text-xl">{authUser.name}</p>
                        </div>
                        <div className="grid grid-cols-[200px_1fr] gap-3 mb-2">
                            <p>Phone Number:</p>
                            <p className="font-semibold text-xl">{authUser.phone}</p>
                        </div>
                        <div className="grid grid-cols-[200px_1fr] gap-3">
                            <p>Email:</p>
                            <p className="font-semibold text-xl">{authUser.email}</p>
                        </div>
                        {authUser.address && (
                            <div className="grid grid-cols-[200px_1fr] gap-3 mb-2">
                                <p>Address:</p>
                                <p className="font-semibold text-xl">{authUser.address}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="border-t flex items-center justify-start pl-10 gap-5 pt-10">
                <StaffChangePasswordModal isOpen={isOpen} onOpenChange={onOpenChange} />
                <Button color="warning" className="text-white" onPress={onOpen}>
                    Change Password
                </Button>
                <Button
                    color="danger"
                    onClick={() => {
                        staffLogout()
                    }}
                >
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default Staff

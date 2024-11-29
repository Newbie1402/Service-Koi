import { Button, Checkbox, useDisclosure } from '@nextui-org/react'
import StaffChangeScheduleModal from '../components/modals/StaffChangeScheduleModal'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import staffApi from '../apis/staff.api'

function StaffSchedulePage() {
    const { authUser } = useAuthContext()
    const [staffData, setStaffData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const response = await staffApi.getStaffs()
            const { status, data } = response
            if (status === 200) {
                const foundStaff = data.filter((item) => item.id === authUser.id)
                setStaffData(foundStaff[0] ?? {})
            }
        }
        fetchData()
    }, [authUser.id])

    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    return (
        <div className="p-5">
            <h1 className="text-2xl font-semibold">Staff Schedule Management</h1>
            <div className="border-t mt-5 pt-5">
                <p className="text-lg font-semibold">Current Schedule</p>
                <StaffChangeScheduleModal staffData={staffData} isOpen={isOpen} onOpenChange={onOpenChange} />
                <div className="my-8">
                    <div className="grid grid-cols-6">
                        <div className="flex flex-col items-center gap-2">
                            <p>MONDAY</p>
                            <Checkbox isSelected={staffData.staffschedule?.includes('MONDAY')} />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <p>TUESDAY</p>
                            <Checkbox isSelected={staffData.staffschedule?.includes('TUESDAY')} />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <p>WEDNESDAY</p>
                            <Checkbox isSelected={staffData.staffschedule?.includes('WEDNESDAY')} />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <p>THURSDAY</p>
                            <Checkbox isSelected={staffData.staffschedule?.includes('THURSDAY')} />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <p>FRIDAY</p>
                            <Checkbox isSelected={staffData.staffschedule?.includes('FRIDAY')} />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <p>SATURDAY</p>
                            <Checkbox isSelected={staffData.staffschedule?.includes('SATURDAY')} />
                        </div>
                    </div>
                </div>
                <div className="border-t pt-5 mt-5 flex items-center justify-center">
                    <Button
                        color="success"
                        className="text-white"
                        onClick={async () => {
                            onOpen()
                        }}
                    >
                        Edit Schedule
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default StaffSchedulePage

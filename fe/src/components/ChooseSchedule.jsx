import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from '@nextui-org/checkbox'

ChooseSchedule.propTypes = {
    staffSchedule: PropTypes.array.isRequired,
    setStaffSchedule: PropTypes.func.isRequired,
}

function ChooseSchedule({ staffSchedule, setStaffSchedule }) {
    const [monday, setMonday] = useState(staffSchedule.includes('MONDAY'))
    const [tuesday, setTuesday] = useState(staffSchedule.includes('TUESDAY'))
    const [wednesday, setWednesDay] = useState(staffSchedule.includes('WEDNESDAY'))
    const [thursday, setThursday] = useState(staffSchedule.includes('THURSDAY'))
    const [friday, setFriday] = useState(staffSchedule.includes('FRIDAY'))
    const [saturday, setSaturday] = useState(staffSchedule.includes('SATURDAY'))

    useEffect(() => {
        const temp = []
        if (monday === true) {
            temp.push('MONDAY')
        }
        if (tuesday === true) {
            temp.push('TUESDAY')
        }
        if (wednesday === true) {
            temp.push('WEDNESDAY')
        }
        if (thursday === true) {
            temp.push('THURSDAY')
        }
        if (friday === true) {
            temp.push('FRIDAY')
        }
        if (saturday === true) {
            temp.push('SATURDAY')
        }
        setStaffSchedule(temp)
    }, [monday, tuesday, wednesday, thursday, friday, saturday, setStaffSchedule])
    return (
        <div className="mt-3">
            <label className="text-sm">
                Shedule Work on Week <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col ml-4 gap-2 mt-2">
                <Checkbox isSelected={monday} onValueChange={setMonday}>
                    Monday
                </Checkbox>
                <Checkbox isSelected={tuesday} onValueChange={setTuesday}>
                    Tuesday
                </Checkbox>
                <Checkbox isSelected={wednesday} onValueChange={setWednesDay}>
                    Wednesday
                </Checkbox>
                <Checkbox isSelected={thursday} onValueChange={setThursday}>
                    Thursday
                </Checkbox>
                <Checkbox isSelected={friday} onValueChange={setFriday}>
                    Friday
                </Checkbox>
                <Checkbox isSelected={saturday} onValueChange={setSaturday}>
                    Saturday
                </Checkbox>
            </div>
        </div>
    )
}

export default ChooseSchedule

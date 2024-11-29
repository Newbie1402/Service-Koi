import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Searchbar() {
    const [isExtendSearchbar, setIsExtendSearchbar] = useState(false)
    const [, setSearchParams] = useSearchParams()
    const [searchKey, setSearchKey] = useState('')

    const handleOnSubmit = (event) => {
        event.preventDefault()
        if (isExtendSearchbar) {
            setSearchParams({ search: searchKey })
            setIsExtendSearchbar(false)
        } else {
            setIsExtendSearchbar(true)
        }
        setSearchKey('')
    }

    return (
        <div className="w-full">
            <form className="grid grid-cols-[25px_1fr] items-center gap-2" onSubmit={handleOnSubmit}>
                <button type="submit" onSubmit={handleOnSubmit} title="Search">
                    <Icon icon="material-symbols:search" fontSize={25} />
                </button>
                {isExtendSearchbar && (
                    <input
                        className="focus:outline-none text-black p-1 text-sm"
                        placeholder="Search ..."
                        value={searchKey}
                        onChange={(event) => {
                            setSearchKey(event.target.value)
                        }}
                        autoFocus
                    />
                )}
            </form>
        </div>
    )
}

export default Searchbar

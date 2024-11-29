import { Icon } from '@iconify/react/dist/iconify.js'
import { config } from '../configs'
import Searchbar from './Searchbar'
import { Link } from 'react-router-dom'

function Navbar() {
    const navigates = [
        {
            label: 'Training',
            path: '#',
            children: [
                {
                    label: 'Fish Diagnostic Lab - June 2024',
                    path: config.routes.traning_fish_diagnotics_lab,
                },
                {
                    label: 'Basic Fish Health Mini Classes',
                    path: config.routes.traning_basic_fish_health_mini_classes,
                },
            ],
        },
        {
            label: 'Types of Fish',
            path: '#',
            children: [
                {
                    label: 'Fish Diagnostic Lab - June 2024',
                    path: config.routes.traning_fish_diagnotics_lab,
                },
                {
                    label: 'Basic Fish Health Mini Classes',
                    path: config.routes.traning_basic_fish_health_mini_classes,
                },
            ],
        },
        {
            label: 'Fish Care',
            path: '#',
            children: [
                {
                    label: 'Fish Diagnostic Lab - June 2024',
                    path: config.routes.traning_fish_diagnotics_lab,
                },
                {
                    label: 'Basic Fish Health Mini Classes',
                    path: config.routes.traning_basic_fish_health_mini_classes,
                },
            ],
        },
        {
            label: 'Fish Health Issues',
            path: '#',
            children: [
                {
                    label: 'Fish Diagnostic Lab - June 2024',
                    path: config.routes.traning_fish_diagnotics_lab,
                },
                {
                    label: 'Basic Fish Health Mini Classes',
                    path: config.routes.traning_basic_fish_health_mini_classes,
                },
            ],
        },
        {
            label: 'For Kids',
            path: '#',
            children: [
                {
                    label: 'Fish Diagnostic Lab - June 2024',
                    path: config.routes.traning_fish_diagnotics_lab,
                },
                {
                    label: 'Basic Fish Health Mini Classes',
                    path: config.routes.traning_basic_fish_health_mini_classes,
                },
            ],
        },
        {
            label: 'Aquatic Vet Info',
            path: '#',
            children: [
                {
                    label: 'Fish Diagnostic Lab - June 2024',
                    path: config.routes.traning_fish_diagnotics_lab,
                },
                {
                    label: 'Basic Fish Health Mini Classes',
                    path: config.routes.traning_basic_fish_health_mini_classes,
                },
            ],
        },
        {
            label: 'Contact',
            path: config.routes.contact,
        },
    ]

    return (
        <div className="bg-primary text-white">
            <div className="container grid grid-cols-[340px_1fr] gap-5 items-center">
                <Searchbar />
                <ul className="flex items-center justify-end">
                    {navigates.map((navigate, index) => (
                        <li key={index} className="group relative py-[6px]">
                            <div className="px-4 flex items-center justify-start gap-2">
                                <a href={navigate.path}>{navigate.label}</a>
                                {navigate.children && <Icon icon="fluent:chevron-down-12-filled" className="group-hover:rotate-180 transition duration-300" />}
                            </div>
                            {/* Dropdown */}
                            {navigate.children && (
                                <ul className="hidden group-hover:block border-t absolute top-full left-0 bg-primary w-[208px] z-20">
                                    {navigate.children.map((dropdownItem, index) => (
                                        <li key={index} className="px-4 py-[14px] hover:bg-primary-200 transition duration-200">
                                            <Link to={dropdownItem.path} className="block">
                                                {dropdownItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar

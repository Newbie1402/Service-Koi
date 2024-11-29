function OurServices() {
    const services = [
        {
            title: 'Complete Pond/Tank Packages',
            description: 'Receive a complete assessment of the health of your pond or tank. These packages include water quality testing and physical exams of your fish under sedation.',
        },
        {
            title: 'Water Quality Testing',
            description:
                'We offer a wide array of water quality testing and provide complete, simple interpretation with simple instructions to correct any issues you might have in your pond or tank.',
        },
        {
            title: 'Fish Physical Exams',
            description:
                'All fish seen by our service are given thorough and complete physical exams. All fish are captured in a safe and efficient manner and usually given sedatives to make the experience low stress.',
        },
    ]
    return (
        <div className="bg-[#f7fbff]">
            <div className="container py-[88px] text-gray-500">
                <h2 className="m-5 text-center text-[40px] leading-[52px] font-medium">Our Services for All Fish</h2>
                <ul className="mt-20 grid grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <li key={index} className="flex flex-col items-center gap-3">
                            <p className="text-2xl font-medium">{service.title}</p>
                            <p className="text-center leading-loose">{service.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default OurServices

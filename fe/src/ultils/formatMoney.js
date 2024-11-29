function formatMoney(argument) {
    const result = +argument
    return result.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    })
}

export { formatMoney }

export const formatDate = (date) => {
    const dateObject = new Date(date);

    return dateObject.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
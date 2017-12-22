export function format(d) {
    let options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
    };
    if (d ==='-' || d === '') {
        return '-'
    } else {
        return(new Date(d).toLocaleString("ru", options));
    }
}



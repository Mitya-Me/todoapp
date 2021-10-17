const handleSearch = (eventValue, setSearchQuery, dataArr, setDataArr) => {
    setSearchQuery(eventValue);
    let arr = [];
    if (eventValue.length >= 3) {
        dataArr.forEach(el => {
            if (el.title.toLowerCase().includes(eventValue.toLowerCase())) {
                arr.push(el)
                setDataArr(arr)
            }
        })
    } else if (eventValue.length >= 0) {
        setDataArr(dataArr)
    }
}

export default handleSearch;
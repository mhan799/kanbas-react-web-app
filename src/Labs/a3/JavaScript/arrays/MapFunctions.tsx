// Question: On a3 document the output doesnt have 
//3's squares and cubes do I need to delete that on my end?
function mapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a: number) => a * a;
    
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);

    return(
        <div>
            <h3>Map</h3>
            squares = {squares}<br/>
            cubes = {cubes}<br/>
        </div>
    )
    
        

}
export default mapFunction
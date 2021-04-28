const Data = () => {
    return(
        <div>
         <label for="start">Date:</label>

<input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31"/>
        </div>
    );
}
export default Data;
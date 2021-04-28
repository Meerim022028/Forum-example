const Gender = () => {
    return(
        <div>
<label for="fname">Gender :</label> <br/>
   <input type="checkbox" id="male" name="gender" value="male"/>
<label for="male">Male</label> <br/>
<input type="checkbox" id="female" name="gender" value="female"/>
<label for="female">Female</label> <br/>
<input type="checkbox" id="other" name="gender" value="other"/>
<label for="other">Other</label> 

        </div>
    );
}
export default Gender;
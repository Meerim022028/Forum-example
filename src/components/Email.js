
const Email = () => {
    return(
        <div>
         <label for="email">Email</label>
           
<input type="email" id="email"
       pattern=".+@globex.com" size="30" required/>
        </div>
    );
}
export default Email;
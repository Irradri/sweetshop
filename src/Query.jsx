import React from 'react';
const Query=()=>{
    return(
        <>
        <h1 class="display-3 text-primary">Mention your queries here.....</h1>
        <form method="post" class="was-validated">
            <div class="form-group">
                <label for="Name">Name:</label>
                <input id="Name" class="form-control" type="text" placeholder="Type here" required/>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input id="email" class="form-control" type="email" required placeholder="Type here"/>
            </div>
            <div class="form-group">
                <label for="number">Contact No. :</label>
                <input id="number" class="form-control" type="number" required placeholder="Type here"/>
            </div>
            <div class="form-group">
                <label for="query">Query:</label>
                <textarea id="query" class="form-control" rows="3" placeholder="Type your issue here" required></textarea>
            </div>
            <div class="d-flex justify-content-sm-around">
                <button class="btn btn-success" type="submit">Submit</button>
                <button class="btn btn-danger" type="reset">Reset</button>
            </div>
        </form><br/><br/><br/>
        </>
    );
}
export default Query;
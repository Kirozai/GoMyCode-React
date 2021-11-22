import './App.css';
import React from 'react';

function App() {
  return (
    <>
    <div class="gmc">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />
      <div class="container">
        <form class="well form-horizontal" action=" " method="post" id="contact_form">
          <fieldset>
            <legend>JoiN Void CorporatioN Now!</legend>
            <div class="form-group">
              <label class="col-md-4 control-label">First Name</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                  <input name="first_name" placeholder="First Name" class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label" >Last Name</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                  <input name="last_name" placeholder="Last Name" class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">E-Mail</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                  <input name="email" placeholder="E-Mail Address" class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">Phone Number </label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
                  <input name="phone" placeholder="(+216)********" class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">Address</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                  <input name="address" placeholder="Address" class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">City</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                  <input name="city" placeholder="City  " class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">State</label>
              <div class="col-md-4 selectContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
                  <select name="state" class="form-control selectpicker" >
                    <option value=" " class="special">Please select your state</option>
                    <option>Ariana</option>
                    <option>Beja</option>
                    <option >Ben Arous</option>
                    <option >Bizerte</option>
                    <option >Gabes</option>
                    <option>Gafsa</option>
                    <option>Jendouba</option>
                    <option >Kairouan</option>
                    <option >Kasserine</option>
                    <option >Kebili</option>
                    <option>Le Kef</option>
                    <option>Medenine</option>
                    <option >Mahdia</option>
                    <option >Manubah</option>
                    <option >Monastir</option>
                    <option>Nabeul</option>
                    <option>Sfax</option>
                    <option >Sidi Bou Zid</option>
                    <option >Siliana</option>
                    <option >Sousse</option>
                    <option>Tataouine</option>
                    <option>Tozeur</option>
                    <option >Tunis</option>
                    <option >Zaghouan</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">Postal Code</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                  <input name="zip" placeholder="Postal Code" class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">Project Description</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                  <textarea class="form-control" name="comment" placeholder="Project Description"></textarea>
                </div>
              </div>
            </div>
            <div class="alert alert-success" role="alert" id="success_message">Success <i class="glyphicon glyphicon-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.</div>
            <div class="form-group">
              <label class="col-md-4 control-label"></label>
              <div class="col-md-4">
                <button type="submit" class="btn btn-dark" >Send <span class="glyphicon glyphicon-send"></span></button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    </>
  );
}

export default App;

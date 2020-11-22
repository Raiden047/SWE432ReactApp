import React from 'react';

class App extends React.Component {
  state = {
    replacementOption: 'WO',
    textareaVal: "",
  }

  resetBoxSize() {
    document.getElementById("strEnter").style.height = "300px";
    document.getElementById("strChosen").style.height = "300px";

    document.getElementById("strEnter").style.width = "200px";
    document.getElementById("strChosen").style.width = "200px";
  }

  clearFields() {
      document.getElementById("strEnter").value = "";
      document.getElementById("curRandomString").value = "";
      document.getElementById("strChosen").value = "";
  }

  clearResults() {
    document.getElementById("curRandomString").value = "";
    document.getElementById("strChosen").value = "";
  }

  setReplacementOption(event) {
    this.setState.replacementOption = event.target.value;
    console.log(this.state.replacementOption);
  }

  handleTextChange(event) {
    this.setState({textareaVal: event.target.value});
  }

  submit() {
    this.setState({aval: this.state.textareaVal});
    var errCount = 0
    var errorMsg = '';
    if (this.state.textareaVal.trim() === "") 
    { 
      //console.log(this.state.textareaVal);
      errorMsg = "\n\nEnter strings to be chosen.";
      errCount++;
    }
    if (errCount > 0) 
    {
      alert("Please correct the following " + errCount + " fields: " + errorMsg);
      if ( this.state.textareaVal === "") 
      {
          document.getElementById("strEnter").focus();
      }
      //console.log('no input');
    }
    else {
      //console.log('ready');
      //console.log(this.state.textareaVal.split('\n'));
      this.getRandomString();
    }
  }

  getRandomString(){
    var text = this.state.textareaVal.split('\n');
    for(var i = 0; i < text.length; i++){
      if(text[i].trim() === ""){
        text.splice(i, 1);
        i--;
      }
    }
    const min = 0;
    const max = text.length;
    const rand = Math.floor(min + Math.random() * (max - min));
    //console.log(max);
    //console.log(text[rand]);
    document.getElementById("curRandomString").value = text[rand];
    document.getElementById("strChosen").value += ""+text[rand]+"\n";
  }
  
  render(){ 
    return (
      <table border={0} cellPadding={2} cellSpacing={1} width="70%" align="center">
        <tbody>
          <tr>
            <td width="90%" colSpan={8}>
              <h2 align="center">String Randomization</h2>
              <hr />
            </td>
          </tr>
          <tr>
            <td bgcolor="#CCFFFF" align="center" width="35%" colSpan={2}><b> Enter strings to be chosen </b><br />
              <i>Separate multiple strings by new lines.</i>
            </td>
            <td width="2%" colSpan={1}>&nbsp;&nbsp;</td>
            <td bgcolor="#EEEEEE" align="center" width="35%" colSpan={2}>String chosen: 
              <input type="text" border={0} readOnly="readonly" name="curRandomString" id="curRandomString" size={30} />
            </td>
            <td width="2%" colSpan={1}>&nbsp;&nbsp;</td>
            <td align="center" width="25%" colSpan={2}>&nbsp;</td>
          </tr>
          <tr>
            <td bgcolor="#CCFFFF" align="center" width="35%" colSpan={2}>
              <textarea id="strEnter" onChange={this.handleTextChange.bind(this)} style={{height: '300px', width: '200px', resize: 'vertical'}} autoFocus={true} defaultValue={""} />
            </td>
            <td width="2%" colSpan={1}>&nbsp;&nbsp;</td>
            <td bgcolor="#EEEEEE" align="center" width="35%" colSpan={2}>
              <textarea id="strChosen" style={{height: '300px', width: '200px', resize: 'vertical'}} readOnly="readonly" defaultValue={""} />
            </td>
            <td width="2%" colSpan={1}>&nbsp;&nbsp;</td>
            <td width="25%" colSpan={2} align="center">
              <table border={0}>
                <tbody><tr>
                    <td>
                      <div onChange={this.setReplacementOption.bind(this)}>
                      <input type="radio" id="replacementOption" value="WR" name="replacementOption"/>With replacement <br></br>
                      <input type="radio" id="replacementOption" defaultChecked={true} value="WO" name="replacementOption"/>Without replacement
                      </div>
                    </td>
                  </tr>
                  <tr cellPadding={2}>
                    <td align="center">
                      <button type="button" onClick={() => this.submit()}>Submit</button>
                    </td>
                  </tr>
                  <tr cellPadding={2}>
                    <td align="center">&nbsp;</td>
                  </tr>
                  <tr cellPadding={2}>
                    <td align="center">
                      <button type="button" onClick={() => this.resetBoxSize()}>Reset TextField Size</button>
                    </td>
                  </tr>
                  <tr cellPadding={2}>
                    <td align="center">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="center">
                      <button type="button" onClick={() => this.clearFields()}>Restart</button>
                    </td>
                  </tr>
                </tbody></table>
            </td>
          </tr>
          <tr>
            <td bgcolor="#CCFFFF" align="center" width="35%" colSpan={2}>&nbsp;</td>
            <td width="2%" colSpan={1}>&nbsp;&nbsp;</td>
            <td bgcolor="#EEEEEE" align="center" width="35%" colSpan={2}>
              <button type="submit" name="btn" value="Clear" onClick={() => this.clearResults()}>Clear Chosen Strings</button>
            </td>
            <td width="2%" colSpan={1}>&nbsp;&nbsp;</td>
            <td align="center" width="25%" colSpan={2}>&nbsp;</td>
          </tr>
          <tr>
            <td colSpan={8}><hr /></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default App;

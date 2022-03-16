//Helper function to get value by id
function getValue(name){
  return document.getElementById(name).value
}

function validateSubmission(){
  //save all the input values
  const name = getValue('name')
  const budgetB = getValue('budgetB')
  const ada = getValue('ada')
  const txid = getValue('txid')
  const description = getValue('description')
  const pool = getValue('pool')
  
  //generate a filename
    const filename = new Date().getTime().toString() + '-' + name.replace(/\s/g, '-') + ".json"
    
    function ideascaleLink(pool) {
      var iLink = "";
      switch(pool) {
        case 'Power Up Catalyst Circle':
          iLink = "https://cardano.ideascale.com/c/idea/373192";
          break;
        case 'CC Admin Team Scope Expansion':
          iLink = "https://cardano.ideascale.com/c/idea/384245";
          break;
        case 'CCv3 Sustaining The Circle':
          iLink = "https://cardano.ideascale.com/c/idea/384250";
          break;
        case 'CC Funding Mechanism':
          iLink = "https://cardano.ideascale.com/c/idea/384249";
          break;
        case 'CC Treasury Management':
          iLink = "https://cardano.ideascale.com/c/idea/383284";
          break;
        case 'CC Mentorship':
          iLink = "https://cardano.ideascale.com/c/idea/385019";
          break;              
        default:
          iLink = "";
          break;
      }
      return iLink;
    }    
    
    //Generate a string mimicing the file structure
    //Indentation is important here
    let fileText = `{
  "id" : ${new Date().getTime().toString()},
  "date": "${new Date().toUTCString()}",
  "project": "Catalyst Circle",
  "pool": "${pool}",
  "Ideascale": "${ideascaleLink(pool)}"
  "budget": "${budgetB}",
  "ada": ${ada},
  "name": "${name}",
  "description": "${description}"
}
`
  
  //Encode string to URI format
  const encodedFileText = encodeURIComponent(fileText)

  //Generate a github link with query parameter
  
  function githubQueryLink(pool) {
    var answer = "";
    switch(pool) {
      case 'Power Up Catalyst Circle':
        answer = "Fund6/Power-Up-The-Catalyst-Circle/";
        break;
      case 'CC Admin Team Scope Expansion':
        answer = "Fund7/CC-Admin-Team-Scope-Expantion/";
        break;
      case 'CCv3 Sustaining The Circle':
        answer = "Fund7/CCv3-Sustaining-the-circle/";
        break;
      case 'CC Funding Mechanism':
        answer = "Fund7/CC-Funding-Mechanism/";
        break;
      case 'CC Treasury Management':
        answer = "Fund7/CC-Treasury-Management/";
        break;
      case 'CC Mentorship':
        answer = "Fund7/CC-Mentorship/";
        break;              
      default:
        answer = "";
        break;
    }
    return answer;
  }

  function githubQueryLink2(budgetB) {
    var answer = "";
    switch(budgetB) {
      case 'Incoming IOG':
        answer = "Incoming-IOG/";
        break;
      case 'CC member remuneration':
        answer = "CC-member-remuneration/";
        break;
      case 'CC - Comm/Org tools':
        answer = "CC-Comm-Org-tools/";
        break;
      case 'CC Admin staff remuneration':
        answer = "CC-Admin-staff-remuneration/";
        break;
      case 'CC Admin - Comm/Org tools':
        answer = "CC-Admin-Comm-Org-tools/";
        break;
      case 'CC Treasurer remuneration':
        answer = "CC-Treasurer-remuneration/";
        break;
      case 'CC Treasury system':
        answer = "CC-Treasury-system/";
        break;
      case 'CC Treasury system documentation':
        answer = "CC-Treasury-system-documentation/";
        break;
      case 'CCv1 Mentorship':
        answer = "CCv1-Mentorship/";
        break;    
      case 'CCv2 Mentorship':
        answer = "CCv2-Mentorship/";
        break;          
      case 'Funding Mechanism - Community Advisors':
        answer = "Funding-Mechanism-Community-Advisors/";
        break;
      case 'Funding Mechanism - Funded Proposers':
        answer = "Funding-Mechanism-Funded-Proposers/";
        break;
      case 'Funding Mechanism - General ADA Holder':
        answer = "Funding-Mechanism-General-ADA-Holder/";
        break;
      case 'Funding Mechanism - Stake Pool Operators':
        answer = "Funding-Mechanism-Stake-Pool-Operators/";
        break;
      case 'Funding Mechanism - Toolmakers & Maintainers':
        answer = "Funding-Mechanism-Toolmakers-&-Maintainers/";
        break;
      case 'Other':
        answer = "Other/";
        break;
      default:
        answer = "";
        break;
    }
    return answer;
  }
  //Open in a new tab
window.open("https://github.com/cctreasury/Treasury-system/new/main/Transactions/" + githubQueryLink(pool) + githubQueryLink2(budgetB) + "new?value=" + encodedFileText +"&filename=" + filename);
  
}
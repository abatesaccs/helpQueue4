// import React from 'react';
// // import Ticket from './Ticket.js';
// import PropTypes from 'prop-types';
// import Moment from 'moment';
// import { connect } from 'react-redux';
// import { v4 } from 'uuid';

// // function NewTicketForm(props){
// class NewTicketForm extends React.Component{
//   constructor(props) {
//     super(props);
//     console.log(props);
//     let _names = null;
//     let _location = null;
//     let _issue = null;
//   }

//   handleNewTicketFormSubmission(event) {
//     event.preventDefault();
//     // console.log(props)
//     const { dispatch } = props;
//     const action = {
//       type: 'ADD_TICKET',
//       id: v4(),
//       names: _names.value,
//       location: _location.value,
//       issue: _issue.value,
//       timeOpen: new Date().getTime()
//     };
//     props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, timeOpen: new Moment()});
//     _names.value = '';
//     _location.value = '';
//     _issue.value = '';
//   }

//   render(){
//     return (
//       <div>
//         <form onSubmit={this.handleNewTicketFormSubmission}>
//           <input
//             type='text'
//             id='names'
//             placeholder='Pair Names'
//             ref={(input) => {this._names = input;}}/>
//           <input
//             type='text'
//             id='location'
//             placeholder='Location'
//             ref={(input) => {this._location = input;}}/>
//           <textarea
//             id='issue'
//             placeholder='Describe your issue.'
//             ref={(textarea) => {this._issue = textarea;}}/>
//           <button type='submit'>Help!</button>
//         </form>
//       </div>
//     );
//   }
// }

// NewTicketForm.propTypes = {
//   onNewTicketCreation: PropTypes.func
// };

// NewTicketForm = connect()(NewTicketForm);

// export default NewTicketForm;





/////////////////////////////////////////////////////////////////////






import React from 'react';
// import Ticket from './Ticket.js';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewTicketForm(props){
  console.log(props);
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(props)
    const { dispatch } = props;
    const action = {
      type: 'ADD_TICKET',
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Date().getTime()
    };
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

NewTicketForm = connect()(NewTicketForm);

export default NewTicketForm;
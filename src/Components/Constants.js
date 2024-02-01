const columnsArr = [
    { id: 'firstName', label: 'First Name' },
    { id: 'lastName', label: 'Last Name' },
    { id: 'address', label: 'Address' },
    {id: 'street', label: 'Street'},
    { id: 'city', label: 'City' },
    { id: 'state', label: 'State' },
    { id: 'email', label: 'Email' },
    { id: 'phone', label: 'Phone' },
    { id: 'action', label: 'Action' },
  ];

const columnFields = {
    first_name: 'First Name',
    last_name: 'Last Name',
    address: 'Address',
    street: 'Street',
    city: 'City',
    state: 'State',
    email: 'Email',
    phone: 'Phone'
}

const searchFilterOptions = ['first_name','city','email','phone'];
const sortByOptions = ['first_name','city','state'];

  export {columnsArr, columnFields, searchFilterOptions, sortByOptions};
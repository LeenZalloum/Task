const OurList = ({ ...props }) => {
    const {user:info} = props;
    return (
      <div className='list'>
       
        {info.map(info => (
          <div key={info.id}>
            <p>
              {info.name} 
              <br />
              {info.email}
              <br />
              {info.phone}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default OurList;
  
import React from 'react';

class KennelDogProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
  }

  closeProfile() {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    console.log('this.props from kenneldogprofile:', this.props.dog)
    const dog = this.props.dog;
    if (this.state.clicked) {
        return (<div></div>);
    }
    else {
    return (
    <div>
     <h3>{dog.name.$t}</h3>
      <div className="doggyProfile" style={{display: 'flex', flexDirection: 'row', alignSelf: 'auto', borderStyle: 'solid'}}>
        {/*<div><h3>{this.props.dog.name.$t}</h3></div>*/}
        <img src={dog.media.photos.photo[0]} style={{width: '50%', height: '40%' }}/>
        <div className="profile-description">{dog.description.$t}</div>
        <div onClick={this.props.removeDog(this.props.dog)}>REMOVE DOG</div>
        <button type="button" className="btn btn default btn-sm" id="close-profile" onClick={() => this.closeProfile()}>
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    );
  }
  }
}

export default KennelDogProfile;

{/*<div>
      <h1 className="page-header">My Kennel</h1>
        <ul className="media-list col-md-6">{this.props.animalList.map(function(dog){
          return <li className="media dog-box" key={dog.id.$t} style={{display: 'flex'}}>
                    <div className="media-left">
                      <img className="media-object img-rounded" src={dog.media.photos.photo[0]} width="50px" />
                    </div>
                    <h6 className="dogName">
                        {dog.name.$t}
                    </h6>
                    <div className="media-body">
                      <p>{dog.description.$t}</p>
                      {Array.isArray(dog.breeds.breed) ? dog.breeds.breed.map(function(breed) {
                        return <div><span className="label label-primary">Breed: {breed.$t}</span></div>
                      }) : <div><span className="label label-primary">Breed: {dog.breeds.breed.$t}</span></div> }
                      <div><span className="label label-primary">Age: {dog.age.$t}</span></div>
                      <div><span className="label label-primary">Sex: {dog.sex.$t}</span></div>
                    </div>
                </li>
        })}</ul></div>*/}
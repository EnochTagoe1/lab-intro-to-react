import profilePix from "../images/profile.png"

const ContactUserCard = () => {
  return (
    <div className="usercard">
        <img src={profilePix} alt="user profile pic" />
        <h2>Jordan Walke</h2>
        <h4>React Creator</h4>
        <p>Lorem Ipsum</p>
        </div>
  )
}

export default ContactUserCard
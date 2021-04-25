function encrypt(token){
    const encrypted_token = token; // TODO: Encrypt token through Django before saving in cookie
    return encrypted_token;
}

function GoogleSignIn(props){
    function onSignIn(googleUser) {
          localStorage.setItem('encrypted_token', encrypt(googleUser.getAuthResponse().id_token))
          localStorage.setItem('userName', googleUser.getBasicProfile().getName())
          // const profile = googleUser.getBasicProfile();
          // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
          // console.log('Name: ' + profile.getName());
          // console.log('Image URL: ' + profile.getImageUrl());
          // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
          props.onClick(googleUser);
    }

    window.onSignIn = (googleUser) => {onSignIn(googleUser)}

    if (props.visibility)
        return (<div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />);
    else
        return ''

}
export default GoogleSignIn

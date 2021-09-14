import React from 'react'
import styled from 'styled-components';


type ProfileProps = {
    src: string,
    alt: string,
    isSelected?: boolean
};

function Profile({src, alt, isSelected} :ProfileProps){

    return(
        <ProfileStyle src={src} alt={alt} isSelected={isSelected}></ProfileStyle>
        // isSelected 쓰고싶은데 어떻게 가져오는지 모르겠다
    )
}

const ProfileStyle = styled.img`
    display: 'flex',
    alignItems: 'center',
    height: 40,
    width: 40,
    border: isSelected ? '2px solid grey' : undefined,
    borderRadius: 8,
`
    // isSelected 쓰고싶은데 어떻게 가져오는지 모르겠다

export default Profile;
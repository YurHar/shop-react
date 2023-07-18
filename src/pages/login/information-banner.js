import Banner from './images/login-image.png'

export const InformationBanner = () => {

    const defaulStyle = {
        width: '100%',
        height: '100%',
    }

    return(
        <img src={Banner} style={defaulStyle} alt=""/>
    )
}
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { StyledHomeWrapper, StyledLinkButton } from '../components/home/styles'

const Home = () => {
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate('/registration')
	}

	return (
		<StyledHomeWrapper>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<StyledLinkButton onClick={handleNavigate}>
				TO REGISTRATION
			</StyledLinkButton>
		</StyledHomeWrapper>
	)
}

export default Home

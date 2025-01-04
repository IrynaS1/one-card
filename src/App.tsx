import React from 'react';
import styled from 'styled-components';
import img from './imgs/img.png';

function App() {
	return (
		<>
			<BlockCards>
				<Card>
					<Image src={img} />
					<ContentCard>
						<Title>Headline</Title>
						<Subtitle>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Subtitle>
						<Buttons>
							<BtnSeeMore>See more</BtnSeeMore>
							<BtnSave>Save</BtnSave>
						</Buttons>
					</ContentCard>
				</Card>
				<Card>
					<Image src={img} />
					<ContentCard>
						<Title>Headline</Title>
						<Subtitle>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Subtitle>
						<Buttons>
							<BtnSeeMore>See more</BtnSeeMore>
							<BtnSave>Save</BtnSave>
						</Buttons>
					</ContentCard>
				</Card>
				<Card>
					<Image src={img} />
					<ContentCard>
						<Title>Headline</Title>
						<Subtitle>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Subtitle>
						<Buttons>
							<BtnSeeMore>See more</BtnSeeMore>
							<BtnSave>Save</BtnSave>
						</Buttons>
					</ContentCard>
				</Card>
				<Card>
					<Image src={img} />
					<ContentCard>
						<Title>Headline</Title>
						<Subtitle>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Subtitle>
						<Buttons>
							<BtnSeeMore>See more</BtnSeeMore>
							<BtnSave>Save</BtnSave>
						</Buttons>
					</ContentCard>
				</Card>
				<Card>
					<Image src={img} />
					<ContentCard>
						<Title>Headline</Title>
						<Subtitle>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Subtitle>
						<Buttons>
							<BtnSeeMore>See more</BtnSeeMore>
							<BtnSave>Save</BtnSave>
						</Buttons>
					</ContentCard>
				</Card>
			</BlockCards>
		</>
	);
}

const BlockCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 30px;
`

const Card = styled.div`
	box-sizing: border-box;
	max-width: 300px;
	padding: 10px 10px 0 10px;
	border-radius: 15px;
	box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
	background-color: rgb(255, 255, 255);
`

const Image = styled.img`
	width: 280px;
	height: 170px;
	border-radius: 10px;
	margin-bottom: 20px;
`

const ContentCard = styled.div`
	padding-left: 10px;
`

const Title = styled.h2`
	color: rgb(0, 0, 0);
	font-family: Inter, sans-serif;
	font-size: 16px;
	font-weight: 700;
	line-height: 19px;
	margin: 0 0 20px 0;
`

const Subtitle = styled.div`
	max-height: 40px;
	color: rgb(171, 179, 186);
	font-family: Inter, sans-serif;
	font-size: 12px;
	font-weight: 500;
	line-height: 20px;
	margin-bottom: 19px;
`

const Buttons = styled.div`
	display: flex;
	gap: 12px;
	margin-bottom: 22px;
`

const BtnSeeMore = styled.button`
	width: 86px;
	padding: 5px 0;
	border: none;
	border-radius: 5px;
	background-color: rgb(78, 113, 254);
	color: rgb(255, 255, 255);
	font-family: Inter, sans-serif;
	font-size: 10px;
	font-weight: 700;
	line-height: 20px;
`

const BtnSave = styled(BtnSeeMore)`
	color: rgb(78, 113, 254);
	border: 2px solid rgb(78, 113, 254);
	background-color: transparent;
`

export default App;

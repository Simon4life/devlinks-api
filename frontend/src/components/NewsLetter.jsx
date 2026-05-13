import React from "react";
import styled from "styled-components";

const developers = [
  {
    title: "Creative Designer",
    description: "UI/UX Portfolio & Case Studies",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCU5gVFMaJ0cHzt13AtqQpwt46gb2JJZZBxXZXoP7MGfWQBrS8sisocTl_3sXbjQIn7jrKS1COKu002CC8nCk2QEOFRKZhRWMTufQKwBHCgbBQy0-m_fmFqIA5U_OLszdPhSoDqJHsd4wZq5wjKclTqb5P2oYnobmHzYzzD_Y5alCQSwml_RN7BZ1WQVSWko8fOj_Ru0m18_Mo2kBtz-H_0174vFuL1VaOA8tsFqmPLl_ne1wBCYw7zTm1mhCWWNoyrd10CxHPG9zU",
    buttons: ["Latest Case Study", "My Design Toolkit"],
  },
  {
    title: "Fitness Coach",
    description: "Workout plans and nutrition tips",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXOJNTXJ5b4Tj__NNrZRmKALs6Jof7MznLm6Jopz4H6n6HFH-neV4AQm772b0Y0TvNq1VYpeHaDH49ZABcC1-au9j3wsXRUrGDbztTWS0P7o5mdwGOzCZ7BiayBumPIcTSTlAShiXKh5QGF8s5W7xeUnbvVzoNJweUmLbmYB9tJ8oDeEgraHLDc7rxc8flYG9FYAUs1YL21NTSya3jIHN-7vrsrO_kId9hkRiZZJFxnKAetDmk1W9rqrvkDwD_EONCXf-huEUhtzM",
    buttons: ["7-Day Free Trial", "Healthy Recipes PDF"],
  },
  {
    title: "Tech Explorer",
    description: "Latest tech reviews and gadgets",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBsna7IouS1PYJBOqOjly1dixOLI67_5vkOsAhpn0skkwNPJ_htoHfZ6o9OHlElAdjeZnw8Tx-g16r_iJPSR0V3YJir0Lr_OEKntujNG_1lj565hk6ruX9VgwzH1kzHdJA3NDn7ycHYZLLZiUCescAwYkZd-gVFEVRVN0QxGj6jRRObgxyCewwSaXLqYhyWGBja6U_RGTPZlJOU_etKOMwiwFO2adjQRO2NlcSLPZtF8l3QFSeSPjoZPiMnUmMSowElsxlGZ5pUZ74",
    buttons: ["Best Laptops 2024", "Join My Newsletter"],
  },
];

export default function CreatorSection() {
  return (
    <Section>
      <Container>
        <Header>
          <Title>Designed for every Developer</Title>
          <Subtitle>
            See how developers around the world are using devlinks to grow
            their audience and simplify their digital presence.
          </Subtitle>
        </Header>

        <Grid>
          {developers.map((developer, index) => (
            <Card key={index}>
              <CardContent>
                <AvatarWrapper>
                  <Avatar src={developer.image} alt={developer.title} />
                </AvatarWrapper>

                <Role>{developer.title}</Role>
                <Description>{developer.description}</Description>

                <ButtonContainer>
                  {developer.buttons.map((btn, i) => (
                    <FakeButton key={i}>{btn}</FakeButton>
                  ))}
                </ButtonContainer>

                <ProfileLink href="#">View Profile →</ProfileLink>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}


const Section = styled.section`
  padding: 80px 0;
  background: #ffffff;

  @media (prefers-color-scheme: dark) {
    background: rgba(15, 23, 42, 0.5);
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #0f172a;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;

const Subtitle = styled.p`
  margin-top: 16px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  color: #64748b;

  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

/* ============================= */
/* Card */
/* ============================= */

const Card = styled.div`
  padding: 32px;
  border-radius: 24px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-color: #6366f1;
  }

  @media (prefers-color-scheme: dark) {
    background: #0f172a;
    border-color: #1e293b;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

const AvatarWrapper = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }

  @media (prefers-color-scheme: dark) {
    border-color: #1e293b;
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Role = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #64748b;

  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FakeButton = styled.div`
  width: 100%;
  padding: 10px;
  background: white;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #f1f5f9;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);

  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    border-color: #334155;
  }
`;

const ProfileLink = styled.a`
  margin-top: 16px;
  font-size: 14px;
  font-weight: bold;
  color: #6366f1;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    letter-spacing: 0.5px;
  }
`;

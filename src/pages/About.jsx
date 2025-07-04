import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Footer from "../components/Footer";

const About = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      badge: "/images/saa.png",
      verifyLink:
        "https://www.credly.com/badges/eb645090-a761-42a4-9bef-0fd649748c07/public_url",
      showVerify: true,
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      badge: "/images/clf.png",
      verifyLink:
        "https://www.credly.com/badges/f8bfece9-e4a9-465a-94fc-fb0dae08ddc5/public_url",
      showVerify: true,
    },
    {
      title: "Altschool Africa Cloud Engineering Diploma",
      date: "Graduated May 2025",
      issuer: "Altschool Africa",
      badge: "/images/alt.jpeg",
      showVerify: false,
    },
  ];

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "var(--primary-color)",
              mb: 2,
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              maxWidth: "800px",
            }}
          >
            I'm a DevOps and Cloud Architect with expertise in AWS cloud
            solutions, modern web development, and Web3 blockchain technologies.
            I specialize in building scalable cloud infrastructure,
            decentralized applications, and implementing agile methodologies to
            accelerate product growth.
          </Typography>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "var(--primary-color)",
            mb: 4,
          }}
        >
          My Certifications
        </Typography>

        <Grid container spacing={4}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box
                      component="img"
                      src={cert.badge}
                      alt={`${cert.title} badge`}
                      sx={{
                        width: 80,
                        height: 80,
                        mr: 2,
                        objectFit: "contain",
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "var(--primary-color)",
                        }}
                      >
                        {cert.title}
                      </Typography>
                      {cert.date && (
                        <Typography variant="body2" color="text.secondary">
                          {cert.date}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "var(--text-color)",
                      opacity: 0.8,
                      mb: 2,
                    }}
                  >
                    Issued by {cert.issuer}
                  </Typography>
                  {cert.showVerify && (
                    <Link
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        color: "var(--secondary-color)",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      <CheckCircle sx={{ mr: 0.5, fontSize: "1rem" }} />
                      Verify on Credly
                    </Link>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default About;

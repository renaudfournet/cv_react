import { Card, CardBody, CardSubtitle, CardText } from "reactstrap";

function Contact() {
  return (
    <div>
      <Card>
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">TÉLÉPHONE</CardSubtitle>
          <CardText>07 83 31 09 87</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">EMAIL</CardSubtitle>
          <CardText>fournet.renaud@gmail.com</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default Contact;
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";

export default function BlogCard() {
    return (
        <>

            <div className="overflow-x-scroll card-scroll whitespace-nowrap mx-4 my-4 space-x-6 justify-center">
                <Card className="inline-block whitespace-normal align-top h-99 max-w-[20rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src="https://live.staticflickr.com/3863/15003087410_59d64be40f_c.jpg"
                            alt="ui/ux review check"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray">
                            Anthracnose
                        </Typography>
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            Papaya anthracnose is a fungal disease affecting papaya plants, causing fruit rot and economic losses.
                        </Typography>
                    </CardBody>

                </Card>
                <Card className="inline-block whitespace-normal align-top h-99 max-w-[20rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src="https://live.staticflickr.com/4284/34981059850_afb8f767bc_z.jpg"
                            alt="Black Spot"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray">
                            Black Spot
                        </Typography>
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            Papaya black spot, caused by the fungus Asperisporium caricae, results in leaf lesions and reduced fruit quality.
                        </Typography>
                    </CardBody>

                </Card>
                <Card className="inline-block whitespace-normal align-top h-99 max-w-[20rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src="https://live.staticflickr.com/2919/13545828403_ae472bc41d_z.jpg"
                            alt="Phytophthora"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray">
                            Phytophthora
                        </Typography>
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            Papaya phytophthora, a fungal disease caused by Phytophthora palmivora, leads to root rot, wilting, and fruit decay, affecting crop yield.
                        </Typography>
                    </CardBody>

                </Card>
                <Card className="inline-block whitespace-normal align-top h-99 max-w-[20rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src="https://www.growables.org/information/TropicalFruit/images/PapayaNelson10.jpg"
                            alt="Powdery Mildew"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray">
                            Powdery Mildew
                        </Typography>
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            Papaya powdery mildew, caused by the fungus Oidium caricae, results in white powdery patches on leaves, reducing photosynthesis and fruit quality.
                        </Typography>
                    </CardBody>

                </Card>
                <Card className="inline-block whitespace-normal align-top h-99 max-w-[20rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src="https://live.staticflickr.com/8205/8224283972_6966c56353_z.jpg"
                            alt="Ring Spot"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray">
                            Ring Spot
                        </Typography>
                        <Typography variant="lead" color="gray" className="mt-3 font-normal">
                            Papaya ringspot virus stunts plants, yellows leaves, and causes dark rings on fruit.
                        </Typography>
                    </CardBody>

                </Card>
            </div>

        </>
    );
}
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import classes from './style.module.css';
import { Flex,Text,TextInput,Button,Title} from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import { MantineProvider } from '@mantine/core';
import { AiFillStar } from "react-icons/ai";




export default function App() {
  const options = ["Experience", "Quality", "Design", "Size", "Features", "Value", "Replacement"];
   const [selectedOption, setSelectedOption] = useSetState(Array(options.length).fill(0));
   
  

   const handleOptionClick = (index) => {
    setSelectedOption(Array(options.length).fill(0));
    const updatedOptions = [selectedOption];
    updatedOptions[index] = 1;
    setSelectedOption(updatedOptions);
  };
  const comments = [
    {
      name:"Jesse Hopkins",
      content:"The device has a clean design, and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at. ",
      date:"Feb 13 2021",
      ratings:5,
    },
    {
      name:"Alice banks",
      content:"The device has a clean design, and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.",
      date:"Feb 14 2021",
      ratings:4,
    }
  ]
  return <MantineProvider>{
    <>
    <Flex className={classes.app}>
        <Flex className={classes.main}>
           <Text className={classes.logo}>Reviews</Text>
            <TextInput
              className={classes.input}
              placeholder="Your name"
              withAsterisk
            />
            <Flex className={classes.buttonlist}>
              {options.map((Option, index) => (
                <Button key={index}
                  className={`${
                    selectedOption[index]==1 ? classes.active : classes.button
                  }`}
                onClick={() => handleOptionClick(index)}
                >
              {Option}
              </Button>
              ))}              
            </Flex>
            <Flex className={classes.comments}>
             

              {comments.map((comm,index)=>(
                <Flex className={classes.comment} key={index}>
                   <Flex className={classes.header}>
                    <Flex align="center" gap={10}>
                    <Flex className={classes.avatar}><Title order={5}>{comm.name[0]}</Title></Flex>
                    <Title order={1} className={classes.name}>{comm.name}</Title>
                    </Flex>
                    <Flex className={classes.ratings}>
                      {Array.from({ length: comm.ratings }, (_, i) => (
                   <AiFillStar/>
                ))}
                    </Flex>
                  </Flex>
                  <Flex className={classes.content}>
                    <Text>{comm.content}</Text>
                    <Flex className={classes.header}><Text c="#8C8C9F">{comm.date}</Text><Button className={classes.button}>Share</Button></Flex>
                  </Flex>
                </Flex>
              ))}
            </Flex>
        </Flex>
    </Flex>

    </>
  }</MantineProvider>;
}
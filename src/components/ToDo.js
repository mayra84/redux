import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions'

import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack, useColorModeValue } from '@chakra-ui/react';


function ToDo() {

    const [task, setTask] = useState([])
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask(task))
        setTask('')
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <Flex align={'center'} justify={'center'}>
                    <Stack spacing={4} w={'full'} maxW={'md'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} boxShadow={'lg'} p={6} my={12}>
                        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                            Enter an Errand
                        </Heading>
                        <FormControl>
                            <FormLabel>To-Do</FormLabel>
                            <Input placeholder="Ex: Wash the car" _placeholder={{ color: 'gray.500' }} type="text"

                                value={task} onChange={e => setTask(e.target.value)}
                            />
                        </FormControl>

                        <Stack spacing={6}>
                            <Button type='submit' bg={'teal'} color={'white'} _hover={{bg: 'teal.400', }}>
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>

            </form>
        </div>
    )
}

export default ToDo

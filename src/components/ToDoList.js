import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../redux/actions'

import { Button, Divider, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'

function ToDoList() {
  const tasks = useSelector(state => state.taskArray)
  const dispatch = useDispatch()


  const handleDelete = (index) => {
    dispatch(deleteTask(index))
  }


  return (
    <div >
      <Flex justify={'center'} align={'center'}>
        <Stack bg={useColorModeValue('white', 'gray.700')} justify={'center'} spacing={4} w={'full'} maxW={'md'} rounded={'xl'} boxShadow={'lg'} p={6} my={12} m={2}>
          <Heading m={4}>To-Do List</Heading>
          <Divider border={{ color: 'black', size: '15px', style: 'solid' }}></Divider>

          {tasks.length !== 0 ? (

            tasks.map((task, i) => {
              return <div key={i}>
                <Stack justify={'space-between'} direction={'row'} border={{ color: 'gray.500' }}>
                  <Text fontWeight={'medium'} align={'center'}>
                    {task}
                  </Text>

                  <Button colorScheme='teal' size='md' _hover={{ bg: 'teal.400', }}

                    onClick={() => handleDelete(i)}>

                    delete
                  </Button>

                </Stack>
              </div>
            })
          ) : (
            <Text fontWeight={'medium'} align={'center'}>
              You currently have no errands!
            </Text>
          )
          }
        </Stack>
      </Flex>
    </div>
  )
}

export default ToDoList

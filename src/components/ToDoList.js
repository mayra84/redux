import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../redux/actions'

import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'

function ToDoList() {
  const tasks = useSelector(state => state.taskArray)
  const dispatch = useDispatch()


  const handleDelete = (index) => {
    dispatch(deleteTask(index))
  }


  return (
    <div >
      <Flex justify={'center'} align={'center'}>
        <Stack justify={'center'} spacing={4} w={'full'} maxW={'md'} rounded={'xl'} boxShadow={'lg'} p={6} my={12} m={2}>
          <Heading m={4}>ToDo List</Heading>
          {tasks.length !== 0 ? (

            tasks.map((task, i) => {
              return <div key={i}>
                <Stack justify={'space-between'} direction={'row'} border={{ color: 'gray.500' }}>
                  <Text fontWeight={'medium'} align={'center'}>
                    {task}
                  </Text>

                  <Button colorScheme='teal' size='md' _hover={{bg: 'teal.400', }}
                  
                  onClick={() => handleDelete(i)}>

                    delete
                  </Button>

                </Stack>
              </div>
            })
          ) : (
            <div>nothing to see here</div>
          )
          }
        </Stack>
      </Flex>
    </div>
  )
}

export default ToDoList

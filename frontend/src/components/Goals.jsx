import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GoalItemPublic from './GoalItemPublic'
import Spinner from './Spinner'
import { getAllGoals, reset } from '../features/goals/goalSlice'

function GoalsJSX() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
  dispatch(getAllGoals())

  return () => {
    dispatch(reset())
  }
}, [navigate, isError, message, dispatch])

if (isLoading) {
  return <Spinner />
}

  return (
    <>


      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItemPublic key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>Мэдээ алга</h3>
        )}
      </section>
    </>
  )
}

export default GoalsJSX
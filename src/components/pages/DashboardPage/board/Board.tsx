import { Button } from 'components/ui'
import { useAppDispatch } from 'hooks'
import { useEffect, useState } from 'react'
import { useModal } from 'react-modal-state'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { boardApi } from 'redux/api/dashboard/board'
import { selectColumns } from 'redux/slices/board/board-slice'
import { BoardInitialState } from 'redux/slices/board/board-types'
import { selectBoards } from 'redux/slices/boards/boards-slice'
import { BoardHeadingList } from './heading/BoardHeadingList'

export const Board = () => {
  const { name } = useParams()
  const dispatch = useAppDispatch()
  const columns = useSelector(selectColumns)
  const boards = useSelector(selectBoards)
  const { open } = useModal('add-column-modal')
  const [boardData, setBoardData] = useState<BoardInitialState['board'] | null>(
    null
  )

  useEffect(() => {
    if (name) {
      dispatch(
        boardApi.endpoints.getBoardByName.initiate(name, { forceRefetch: true })
      )
        .unwrap()
        .then(r => setBoardData(r))
    }
  }, [name, columns])
  console.log(boardData)
  return (
    <>
      {(boards.length > 0 || boardData !== null) && (
        <div
          className='col-start-2 row-start-2 flex flex-col gap-[39px] px-[20px] pt-[14px] text-fs-14-lh-normal-fw-500 text-black dark:text-white tablet:gap-[26px] tablet:pl-[32px] tablet:pt-[26px] tablet:text-fs-18-lh-normal-fw-500 desktop:gap-[10px] desktop:pl-[24px]
      desktop:pt-[10px]'
          style={{
            backgroundImage: `-webkit-image-set(url(${boardData?.background}))`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          {boardData?.title}
          <Button
            onClick={open}
            className='inline-flex h-[56px] w-[100%] items-center justify-center gap-2 rounded-md bg-white py-[14px] text-fs-14-lh-normal-fw-500 dark:bg-black-secondary mobile:w-[335px] mobile:px-[79px] tablet:w-[334px] tablet:pl-[79px] tablet:pr-[78px]'>
            <svg className='size-7 rounded-md bg-black text-white violet:bg-brand-secondary violet:text-white dark:bg-white dark:text-black'>
              <use xlinkHref='/assets/icons.svg#icon-pluss' />
            </svg>
            Add another column
          </Button>
          <BoardHeadingList columns={boardData?.columns} />
        </div>
      )}
    </>
  )
}

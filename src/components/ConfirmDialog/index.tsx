import {
  CancelButtonSC,
  ConfirmButtonSC,
  ContainerSC,
  DivContainerSC,
  DivSC,
  TextSC,
  TitleSC,
} from './confirmDialogStyles'

import { IConfirmDialogProps } from './types'

export const ConfirmDialog = (props: IConfirmDialogProps) => {
  return (
    <>
      {props.open && (
        <ContainerSC>
          <DivSC>
            <DivContainerSC>
              <TitleSC>Excluir Comentário</TitleSC>

              <TextSC>
                Você tem certeza que gostaria de excluir este comentário ?
              </TextSC>

              <div>
                <CancelButtonSC onClick={props.onCancel}>
                  Cancelar
                </CancelButtonSC>

                <ConfirmButtonSC onClick={props.onConfirm}>
                  Sim, excluir
                </ConfirmButtonSC>
              </div>
            </DivContainerSC>
          </DivSC>
        </ContainerSC>
      )}
    </>
  )
}

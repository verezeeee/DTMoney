import { CurrencyDollar } from "phosphor-react";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <CurrencyDollar size={32} color="#00B37E"/>
                    <h1>DTMoney</h1>
                </div>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>
                            Nova transação
                        </NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}
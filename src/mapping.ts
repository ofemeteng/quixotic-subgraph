import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  SellOrderFilled as SellOrderFilledEvent,
  Unpaused as UnpausedEvent
} from "../generated/Exchange/Exchange"
import { OwnershipTransferred, Paused, SellOrderFilled, Unpaused } from "../generated/schema"

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  // Create a OwnershipTransferred entity, using the hexadecimal string representation
  // of the transaction hash as the entity ID
  let id = event.transaction.hash.toHex()
  let OwnershipTransferredEntity = new OwnershipTransferred(id)

  // Set properties on the OwnershipTransferredEntity, using the event parameters
  OwnershipTransferredEntity.previousOwner = event.params.previousOwner
  OwnershipTransferredEntity.newOwner = event.params.newOwner

  // Save the OwnershipTransferredEntity to the store
  OwnershipTransferredEntity.save()
}

export function handlePaused(event: PausedEvent): void {
  // Create a Paused entity, using the hexadecimal string representation
  // of the transaction hash as the entity ID
  let id = event.transaction.hash.toHex()
  let PausedEntity = new Paused(id)

  // Set properties on the PausedEntity, using the event parameters
  PausedEntity.account = event.params.account

  // Save the PausedEntity to the store
  PausedEntity.save()
}

export function handleSellOrderFilled(event: SellOrderFilledEvent): void {
  // Create a SellOrderFilled entity, using the hexadecimal string representation
  // of the transaction hash as the entity ID
  let id = event.transaction.hash.toHex()
  let SellOrderFilledEntity = new SellOrderFilled(id)

  // Set properties on the SellOrderFilledEntity, using the event parameters
  SellOrderFilledEntity.seller = event.params.seller
  SellOrderFilledEntity.buyer = event.params.buyer
  SellOrderFilledEntity.erc721address = event.params.erc721address
  SellOrderFilledEntity.tokenId = event.params.tokenId
  SellOrderFilledEntity.price = event.params.price

  // Save the SellOrderFilledEntity to the store
  SellOrderFilledEntity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  // Create a Unpaused entity, using the hexadecimal string representation
  // of the transaction hash as the entity ID
  let id = event.transaction.hash.toHex()
  let UnpausedEntity = new Unpaused(id)

  // Set properties on the UnpausedEntity, using the event parameters
  UnpausedEntity.account = event.params.account

  // Save the UnpausedEntity to the store
  UnpausedEntity.save()
}

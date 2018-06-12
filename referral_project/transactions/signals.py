from django.db.models.signals import post_save
from django.db.transaction import atomic
from django.dispatch import receiver

from referral_project.transactions.models import Transaction


@receiver(post_save, sender=Transaction)
def balance_wallets(instance: Transaction, created: bool, **kwargs):
    with atomic():
        amount = instance.amount
        sender = instance.sender
        receiver_ = instance.receiver

        sender.balance -= amount
        sender.save(update_fields={'balance'})
        receiver_.balance += amount
        receiver_.save(update_fields={'balance'})

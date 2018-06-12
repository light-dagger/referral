from django.contrib import admin

from referral_project.transactions.models import Transaction
from referral_project.utils.django.admin import TimeStampedModelAdmin


@admin.register(Transaction)
class TransactionAdmin(TimeStampedModelAdmin):
    list_display = [
        'action',
        'amount',
        'sender',
        'receiver',
        'status',
    ]
    list_select_related = [
        'sender__user',
        'receiver__user',
    ]

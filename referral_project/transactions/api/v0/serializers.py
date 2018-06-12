from rest_framework.serializers import ModelSerializer

from referral_project.transactions.models import Transaction


class TransactionSerializer(ModelSerializer):
    class Meta:
        model = Transaction
        fields = [
            'id',
            'action',
            'amount',
            'sender',
            'receiver',
            'status',
        ]

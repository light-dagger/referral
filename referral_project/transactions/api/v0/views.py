from rest_framework.viewsets import ModelViewSet

from referral_project.transactions.api.v0.serializers import TransactionSerializer
from referral_project.transactions.models import Transaction


class Transactions(ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()

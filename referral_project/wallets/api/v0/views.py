from rest_framework.viewsets import ModelViewSet

from referral_project.wallets.api.v0.serializers import WalletSerializer
from referral_project.wallets.models import Wallet


class Wallets(ModelViewSet):
    serializer_class = WalletSerializer

    def get_queryset(self):
        return Wallet.objects.filter(user=self.request.user)
